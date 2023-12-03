import { t, publicProcedure } from "./helpers/createRouter";
import { SkillAggregateSchema } from "../schemas/aggregateSkill.schema";
import { SkillCreateManySchema } from "../schemas/createManySkill.schema";
import { SkillCreateOneSchema } from "../schemas/createOneSkill.schema";
import { SkillDeleteManySchema } from "../schemas/deleteManySkill.schema";
import { SkillDeleteOneSchema } from "../schemas/deleteOneSkill.schema";
import { SkillFindFirstSchema } from "../schemas/findFirstSkill.schema";
import { SkillFindManySchema } from "../schemas/findManySkill.schema";
import { SkillFindUniqueSchema } from "../schemas/findUniqueSkill.schema";
import { SkillGroupBySchema } from "../schemas/groupBySkill.schema";
import { SkillUpdateManySchema } from "../schemas/updateManySkill.schema";
import { SkillUpdateOneSchema } from "../schemas/updateOneSkill.schema";
import { SkillUpsertSchema } from "../schemas/upsertOneSkill.schema";

export const skillsRouter = t.router({
  aggregateSkill: publicProcedure
    .input(SkillAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkill = await ctx.prisma.skill.aggregate(input);
      return aggregateSkill;
    }),
  createManySkill: publicProcedure
    .input(SkillCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkill = await ctx.prisma.skill.createMany(input);
      return createManySkill;
    }),
  createOneSkill: publicProcedure
    .input(SkillCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkill = await ctx.prisma.skill.create(input);
      return createOneSkill;
    }),
  deleteManySkill: publicProcedure
    .input(SkillDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkill = await ctx.prisma.skill.deleteMany(input);
      return deleteManySkill;
    }),
  deleteOneSkill: publicProcedure
    .input(SkillDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkill = await ctx.prisma.skill.delete(input);
      return deleteOneSkill;
    }),
  findFirstSkill: publicProcedure
    .input(SkillFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkill = await ctx.prisma.skill.findFirst(input);
      return findFirstSkill;
    }),
  findFirstSkillOrThrow: publicProcedure
    .input(SkillFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillOrThrow = await ctx.prisma.skill.findFirstOrThrow(input);
      return findFirstSkillOrThrow;
    }),
  findManySkill: publicProcedure
    .input(SkillFindManySchema).query(async ({ ctx, input }) => {
      const findManySkill = await ctx.prisma.skill.findMany(input);
      return findManySkill;
    }),
  findUniqueSkill: publicProcedure
    .input(SkillFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkill = await ctx.prisma.skill.findUnique(input);
      return findUniqueSkill;
    }),
  findUniqueSkillOrThrow: publicProcedure
    .input(SkillFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillOrThrow = await ctx.prisma.skill.findUniqueOrThrow(input);
      return findUniqueSkillOrThrow;
    }),
  groupBySkill: publicProcedure
    .input(SkillGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkill = await ctx.prisma.skill.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkill;
    }),
  updateManySkill: publicProcedure
    .input(SkillUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkill = await ctx.prisma.skill.updateMany(input);
      return updateManySkill;
    }),
  updateOneSkill: publicProcedure
    .input(SkillUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkill = await ctx.prisma.skill.update(input);
      return updateOneSkill;
    }),
  upsertOneSkill: publicProcedure
    .input(SkillUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkill = await ctx.prisma.skill.upsert(input);
      return upsertOneSkill;
    }),

}) 
