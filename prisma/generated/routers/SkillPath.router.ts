import { t, publicProcedure } from "./helpers/createRouter";
import { SkillPathAggregateSchema } from "../schemas/aggregateSkillPath.schema";
import { SkillPathCreateManySchema } from "../schemas/createManySkillPath.schema";
import { SkillPathCreateOneSchema } from "../schemas/createOneSkillPath.schema";
import { SkillPathDeleteManySchema } from "../schemas/deleteManySkillPath.schema";
import { SkillPathDeleteOneSchema } from "../schemas/deleteOneSkillPath.schema";
import { SkillPathFindFirstSchema } from "../schemas/findFirstSkillPath.schema";
import { SkillPathFindManySchema } from "../schemas/findManySkillPath.schema";
import { SkillPathFindUniqueSchema } from "../schemas/findUniqueSkillPath.schema";
import { SkillPathGroupBySchema } from "../schemas/groupBySkillPath.schema";
import { SkillPathUpdateManySchema } from "../schemas/updateManySkillPath.schema";
import { SkillPathUpdateOneSchema } from "../schemas/updateOneSkillPath.schema";
import { SkillPathUpsertSchema } from "../schemas/upsertOneSkillPath.schema";

export const skillpathsRouter = t.router({
  aggregateSkillPath: publicProcedure
    .input(SkillPathAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillPath = await ctx.prisma.skillPath.aggregate(input);
      return aggregateSkillPath;
    }),
  createManySkillPath: publicProcedure
    .input(SkillPathCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillPath = await ctx.prisma.skillPath.createMany(input);
      return createManySkillPath;
    }),
  createOneSkillPath: publicProcedure
    .input(SkillPathCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillPath = await ctx.prisma.skillPath.create(input);
      return createOneSkillPath;
    }),
  deleteManySkillPath: publicProcedure
    .input(SkillPathDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillPath = await ctx.prisma.skillPath.deleteMany(input);
      return deleteManySkillPath;
    }),
  deleteOneSkillPath: publicProcedure
    .input(SkillPathDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillPath = await ctx.prisma.skillPath.delete(input);
      return deleteOneSkillPath;
    }),
  findFirstSkillPath: publicProcedure
    .input(SkillPathFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillPath = await ctx.prisma.skillPath.findFirst(input);
      return findFirstSkillPath;
    }),
  findFirstSkillPathOrThrow: publicProcedure
    .input(SkillPathFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillPathOrThrow = await ctx.prisma.skillPath.findFirstOrThrow(input);
      return findFirstSkillPathOrThrow;
    }),
  findManySkillPath: publicProcedure
    .input(SkillPathFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillPath = await ctx.prisma.skillPath.findMany(input);
      return findManySkillPath;
    }),
  findUniqueSkillPath: publicProcedure
    .input(SkillPathFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillPath = await ctx.prisma.skillPath.findUnique(input);
      return findUniqueSkillPath;
    }),
  findUniqueSkillPathOrThrow: publicProcedure
    .input(SkillPathFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillPathOrThrow = await ctx.prisma.skillPath.findUniqueOrThrow(input);
      return findUniqueSkillPathOrThrow;
    }),
  groupBySkillPath: publicProcedure
    .input(SkillPathGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillPath = await ctx.prisma.skillPath.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillPath;
    }),
  updateManySkillPath: publicProcedure
    .input(SkillPathUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillPath = await ctx.prisma.skillPath.updateMany(input);
      return updateManySkillPath;
    }),
  updateOneSkillPath: publicProcedure
    .input(SkillPathUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillPath = await ctx.prisma.skillPath.update(input);
      return updateOneSkillPath;
    }),
  upsertOneSkillPath: publicProcedure
    .input(SkillPathUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillPath = await ctx.prisma.skillPath.upsert(input);
      return upsertOneSkillPath;
    }),

}) 
