import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToSkillPathsAggregateSchema } from "../schemas/aggregatePrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsCreateManySchema } from "../schemas/createManyPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsCreateOneSchema } from "../schemas/createOnePrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsDeleteManySchema } from "../schemas/deleteManyPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsDeleteOneSchema } from "../schemas/deleteOnePrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsFindFirstSchema } from "../schemas/findFirstPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsFindManySchema } from "../schemas/findManyPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsFindUniqueSchema } from "../schemas/findUniquePrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsGroupBySchema } from "../schemas/groupByPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsUpdateManySchema } from "../schemas/updateManyPrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsUpdateOneSchema } from "../schemas/updateOnePrioritiesToSkillPaths.schema";
import { PrioritiesToSkillPathsUpsertSchema } from "../schemas/upsertOnePrioritiesToSkillPaths.schema";

export const prioritiestoskillpathsRouter = t.router({
  aggregatePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.aggregate(input);
      return aggregatePrioritiesToSkillPaths;
    }),
  createManyPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.createMany(input);
      return createManyPrioritiesToSkillPaths;
    }),
  createOnePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.create(input);
      return createOnePrioritiesToSkillPaths;
    }),
  deleteManyPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.deleteMany(input);
      return deleteManyPrioritiesToSkillPaths;
    }),
  deleteOnePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.delete(input);
      return deleteOnePrioritiesToSkillPaths;
    }),
  findFirstPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.findFirst(input);
      return findFirstPrioritiesToSkillPaths;
    }),
  findFirstPrioritiesToSkillPathsOrThrow: publicProcedure
    .input(PrioritiesToSkillPathsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToSkillPathsOrThrow = await ctx.prisma.prioritiesToSkillPaths.findFirstOrThrow(input);
      return findFirstPrioritiesToSkillPathsOrThrow;
    }),
  findManyPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.findMany(input);
      return findManyPrioritiesToSkillPaths;
    }),
  findUniquePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.findUnique(input);
      return findUniquePrioritiesToSkillPaths;
    }),
  findUniquePrioritiesToSkillPathsOrThrow: publicProcedure
    .input(PrioritiesToSkillPathsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToSkillPathsOrThrow = await ctx.prisma.prioritiesToSkillPaths.findUniqueOrThrow(input);
      return findUniquePrioritiesToSkillPathsOrThrow;
    }),
  groupByPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToSkillPaths;
    }),
  updateManyPrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.updateMany(input);
      return updateManyPrioritiesToSkillPaths;
    }),
  updateOnePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.update(input);
      return updateOnePrioritiesToSkillPaths;
    }),
  upsertOnePrioritiesToSkillPaths: publicProcedure
    .input(PrioritiesToSkillPathsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToSkillPaths = await ctx.prisma.prioritiesToSkillPaths.upsert(input);
      return upsertOnePrioritiesToSkillPaths;
    }),

}) 
