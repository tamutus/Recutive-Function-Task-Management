import { t, publicProcedure } from "./helpers/createRouter";
import { SkillLinkAggregateSchema } from "../schemas/aggregateSkillLink.schema";
import { SkillLinkCreateManySchema } from "../schemas/createManySkillLink.schema";
import { SkillLinkCreateOneSchema } from "../schemas/createOneSkillLink.schema";
import { SkillLinkDeleteManySchema } from "../schemas/deleteManySkillLink.schema";
import { SkillLinkDeleteOneSchema } from "../schemas/deleteOneSkillLink.schema";
import { SkillLinkFindFirstSchema } from "../schemas/findFirstSkillLink.schema";
import { SkillLinkFindManySchema } from "../schemas/findManySkillLink.schema";
import { SkillLinkFindUniqueSchema } from "../schemas/findUniqueSkillLink.schema";
import { SkillLinkGroupBySchema } from "../schemas/groupBySkillLink.schema";
import { SkillLinkUpdateManySchema } from "../schemas/updateManySkillLink.schema";
import { SkillLinkUpdateOneSchema } from "../schemas/updateOneSkillLink.schema";
import { SkillLinkUpsertSchema } from "../schemas/upsertOneSkillLink.schema";

export const skilllinksRouter = t.router({
  aggregateSkillLink: publicProcedure
    .input(SkillLinkAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillLink = await ctx.prisma.skillLink.aggregate(input);
      return aggregateSkillLink;
    }),
  createManySkillLink: publicProcedure
    .input(SkillLinkCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillLink = await ctx.prisma.skillLink.createMany(input);
      return createManySkillLink;
    }),
  createOneSkillLink: publicProcedure
    .input(SkillLinkCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillLink = await ctx.prisma.skillLink.create(input);
      return createOneSkillLink;
    }),
  deleteManySkillLink: publicProcedure
    .input(SkillLinkDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillLink = await ctx.prisma.skillLink.deleteMany(input);
      return deleteManySkillLink;
    }),
  deleteOneSkillLink: publicProcedure
    .input(SkillLinkDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillLink = await ctx.prisma.skillLink.delete(input);
      return deleteOneSkillLink;
    }),
  findFirstSkillLink: publicProcedure
    .input(SkillLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillLink = await ctx.prisma.skillLink.findFirst(input);
      return findFirstSkillLink;
    }),
  findFirstSkillLinkOrThrow: publicProcedure
    .input(SkillLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillLinkOrThrow = await ctx.prisma.skillLink.findFirstOrThrow(input);
      return findFirstSkillLinkOrThrow;
    }),
  findManySkillLink: publicProcedure
    .input(SkillLinkFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillLink = await ctx.prisma.skillLink.findMany(input);
      return findManySkillLink;
    }),
  findUniqueSkillLink: publicProcedure
    .input(SkillLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillLink = await ctx.prisma.skillLink.findUnique(input);
      return findUniqueSkillLink;
    }),
  findUniqueSkillLinkOrThrow: publicProcedure
    .input(SkillLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillLinkOrThrow = await ctx.prisma.skillLink.findUniqueOrThrow(input);
      return findUniqueSkillLinkOrThrow;
    }),
  groupBySkillLink: publicProcedure
    .input(SkillLinkGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillLink = await ctx.prisma.skillLink.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillLink;
    }),
  updateManySkillLink: publicProcedure
    .input(SkillLinkUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillLink = await ctx.prisma.skillLink.updateMany(input);
      return updateManySkillLink;
    }),
  updateOneSkillLink: publicProcedure
    .input(SkillLinkUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillLink = await ctx.prisma.skillLink.update(input);
      return updateOneSkillLink;
    }),
  upsertOneSkillLink: publicProcedure
    .input(SkillLinkUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillLink = await ctx.prisma.skillLink.upsert(input);
      return upsertOneSkillLink;
    }),

}) 
