import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToSkillsAggregateSchema } from "../schemas/aggregatePrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsCreateManySchema } from "../schemas/createManyPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsCreateOneSchema } from "../schemas/createOnePrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsFindManySchema } from "../schemas/findManyPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsGroupBySchema } from "../schemas/groupByPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToSkills.schema";
import { PrivateEnergiesToSkillsUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToSkills.schema";

export const privateenergiestoskillsRouter = t.router({
  aggregatePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.aggregate(input);
      return aggregatePrivateEnergiesToSkills;
    }),
  createManyPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.createMany(input);
      return createManyPrivateEnergiesToSkills;
    }),
  createOnePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.create(input);
      return createOnePrivateEnergiesToSkills;
    }),
  deleteManyPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.deleteMany(input);
      return deleteManyPrivateEnergiesToSkills;
    }),
  deleteOnePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.delete(input);
      return deleteOnePrivateEnergiesToSkills;
    }),
  findFirstPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.findFirst(input);
      return findFirstPrivateEnergiesToSkills;
    }),
  findFirstPrivateEnergiesToSkillsOrThrow: publicProcedure
    .input(PrivateEnergiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToSkillsOrThrow = await ctx.prisma.privateEnergiesToSkills.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToSkillsOrThrow;
    }),
  findManyPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.findMany(input);
      return findManyPrivateEnergiesToSkills;
    }),
  findUniquePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.findUnique(input);
      return findUniquePrivateEnergiesToSkills;
    }),
  findUniquePrivateEnergiesToSkillsOrThrow: publicProcedure
    .input(PrivateEnergiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToSkillsOrThrow = await ctx.prisma.privateEnergiesToSkills.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToSkillsOrThrow;
    }),
  groupByPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToSkills;
    }),
  updateManyPrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.updateMany(input);
      return updateManyPrivateEnergiesToSkills;
    }),
  updateOnePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.update(input);
      return updateOnePrivateEnergiesToSkills;
    }),
  upsertOnePrivateEnergiesToSkills: publicProcedure
    .input(PrivateEnergiesToSkillsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToSkills = await ctx.prisma.privateEnergiesToSkills.upsert(input);
      return upsertOnePrivateEnergiesToSkills;
    }),

}) 
