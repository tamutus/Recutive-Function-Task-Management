import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateTagAggregateSchema } from "../schemas/aggregatePrivateTag.schema";
import { PrivateTagCreateManySchema } from "../schemas/createManyPrivateTag.schema";
import { PrivateTagCreateOneSchema } from "../schemas/createOnePrivateTag.schema";
import { PrivateTagDeleteManySchema } from "../schemas/deleteManyPrivateTag.schema";
import { PrivateTagDeleteOneSchema } from "../schemas/deleteOnePrivateTag.schema";
import { PrivateTagFindFirstSchema } from "../schemas/findFirstPrivateTag.schema";
import { PrivateTagFindManySchema } from "../schemas/findManyPrivateTag.schema";
import { PrivateTagFindUniqueSchema } from "../schemas/findUniquePrivateTag.schema";
import { PrivateTagGroupBySchema } from "../schemas/groupByPrivateTag.schema";
import { PrivateTagUpdateManySchema } from "../schemas/updateManyPrivateTag.schema";
import { PrivateTagUpdateOneSchema } from "../schemas/updateOnePrivateTag.schema";
import { PrivateTagUpsertSchema } from "../schemas/upsertOnePrivateTag.schema";

export const privatetagsRouter = t.router({
  aggregatePrivateTag: publicProcedure
    .input(PrivateTagAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateTag = await ctx.prisma.privateTag.aggregate(input);
      return aggregatePrivateTag;
    }),
  createManyPrivateTag: publicProcedure
    .input(PrivateTagCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateTag = await ctx.prisma.privateTag.createMany(input);
      return createManyPrivateTag;
    }),
  createOnePrivateTag: publicProcedure
    .input(PrivateTagCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateTag = await ctx.prisma.privateTag.create(input);
      return createOnePrivateTag;
    }),
  deleteManyPrivateTag: publicProcedure
    .input(PrivateTagDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateTag = await ctx.prisma.privateTag.deleteMany(input);
      return deleteManyPrivateTag;
    }),
  deleteOnePrivateTag: publicProcedure
    .input(PrivateTagDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateTag = await ctx.prisma.privateTag.delete(input);
      return deleteOnePrivateTag;
    }),
  findFirstPrivateTag: publicProcedure
    .input(PrivateTagFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTag = await ctx.prisma.privateTag.findFirst(input);
      return findFirstPrivateTag;
    }),
  findFirstPrivateTagOrThrow: publicProcedure
    .input(PrivateTagFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagOrThrow = await ctx.prisma.privateTag.findFirstOrThrow(input);
      return findFirstPrivateTagOrThrow;
    }),
  findManyPrivateTag: publicProcedure
    .input(PrivateTagFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateTag = await ctx.prisma.privateTag.findMany(input);
      return findManyPrivateTag;
    }),
  findUniquePrivateTag: publicProcedure
    .input(PrivateTagFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTag = await ctx.prisma.privateTag.findUnique(input);
      return findUniquePrivateTag;
    }),
  findUniquePrivateTagOrThrow: publicProcedure
    .input(PrivateTagFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagOrThrow = await ctx.prisma.privateTag.findUniqueOrThrow(input);
      return findUniquePrivateTagOrThrow;
    }),
  groupByPrivateTag: publicProcedure
    .input(PrivateTagGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateTag = await ctx.prisma.privateTag.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateTag;
    }),
  updateManyPrivateTag: publicProcedure
    .input(PrivateTagUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateTag = await ctx.prisma.privateTag.updateMany(input);
      return updateManyPrivateTag;
    }),
  updateOnePrivateTag: publicProcedure
    .input(PrivateTagUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateTag = await ctx.prisma.privateTag.update(input);
      return updateOnePrivateTag;
    }),
  upsertOnePrivateTag: publicProcedure
    .input(PrivateTagUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateTag = await ctx.prisma.privateTag.upsert(input);
      return upsertOnePrivateTag;
    }),

}) 
