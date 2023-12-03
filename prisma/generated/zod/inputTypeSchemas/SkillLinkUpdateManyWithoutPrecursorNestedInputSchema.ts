import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateWithoutPrecursorInputSchema } from './SkillLinkCreateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedCreateWithoutPrecursorInputSchema } from './SkillLinkUncheckedCreateWithoutPrecursorInputSchema';
import { SkillLinkCreateOrConnectWithoutPrecursorInputSchema } from './SkillLinkCreateOrConnectWithoutPrecursorInputSchema';
import { SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema } from './SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema';
import { SkillLinkCreateManyPrecursorInputEnvelopeSchema } from './SkillLinkCreateManyPrecursorInputEnvelopeSchema';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema } from './SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema';
import { SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema } from './SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema';
import { SkillLinkScalarWhereInputSchema } from './SkillLinkScalarWhereInputSchema';

export const SkillLinkUpdateManyWithoutPrecursorNestedInputSchema: z.ZodType<Prisma.SkillLinkUpdateManyWithoutPrecursorNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => SkillLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUpsertWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUpdateWithWhereUniqueWithoutPrecursorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUpdateManyWithWhereWithoutPrecursorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillLinkScalarWhereInputSchema),z.lazy(() => SkillLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillLinkUpdateManyWithoutPrecursorNestedInputSchema;
