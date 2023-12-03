import { t, publicProcedure } from "./helpers/createRouter";
import { SkillsToTaskTemplatesAggregateSchema } from "../schemas/aggregateSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesCreateManySchema } from "../schemas/createManySkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesCreateOneSchema } from "../schemas/createOneSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesDeleteManySchema } from "../schemas/deleteManySkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOneSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesFindFirstSchema } from "../schemas/findFirstSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesFindManySchema } from "../schemas/findManySkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesFindUniqueSchema } from "../schemas/findUniqueSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesGroupBySchema } from "../schemas/groupBySkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesUpdateManySchema } from "../schemas/updateManySkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesUpdateOneSchema } from "../schemas/updateOneSkillsToTaskTemplates.schema";
import { SkillsToTaskTemplatesUpsertSchema } from "../schemas/upsertOneSkillsToTaskTemplates.schema";

export const skillstotasktemplatesRouter = t.router({
  aggregateSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.aggregate(input);
      return aggregateSkillsToTaskTemplates;
    }),
  createManySkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.createMany(input);
      return createManySkillsToTaskTemplates;
    }),
  createOneSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.create(input);
      return createOneSkillsToTaskTemplates;
    }),
  deleteManySkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.deleteMany(input);
      return deleteManySkillsToTaskTemplates;
    }),
  deleteOneSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.delete(input);
      return deleteOneSkillsToTaskTemplates;
    }),
  findFirstSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.findFirst(input);
      return findFirstSkillsToTaskTemplates;
    }),
  findFirstSkillsToTaskTemplatesOrThrow: publicProcedure
    .input(SkillsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTaskTemplatesOrThrow = await ctx.prisma.skillsToTaskTemplates.findFirstOrThrow(input);
      return findFirstSkillsToTaskTemplatesOrThrow;
    }),
  findManySkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.findMany(input);
      return findManySkillsToTaskTemplates;
    }),
  findUniqueSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.findUnique(input);
      return findUniqueSkillsToTaskTemplates;
    }),
  findUniqueSkillsToTaskTemplatesOrThrow: publicProcedure
    .input(SkillsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTaskTemplatesOrThrow = await ctx.prisma.skillsToTaskTemplates.findUniqueOrThrow(input);
      return findUniqueSkillsToTaskTemplatesOrThrow;
    }),
  groupBySkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillsToTaskTemplates;
    }),
  updateManySkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.updateMany(input);
      return updateManySkillsToTaskTemplates;
    }),
  updateOneSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.update(input);
      return updateOneSkillsToTaskTemplates;
    }),
  upsertOneSkillsToTaskTemplates: publicProcedure
    .input(SkillsToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillsToTaskTemplates = await ctx.prisma.skillsToTaskTemplates.upsert(input);
      return upsertOneSkillsToTaskTemplates;
    }),

}) 
