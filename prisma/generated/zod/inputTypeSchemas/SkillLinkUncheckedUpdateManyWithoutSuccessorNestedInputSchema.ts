import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateWithoutSuccessorInputSchema } from './SkillLinkCreateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedCreateWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateWithoutSuccessorInputSchema';
import { SkillLinkCreateOrConnectWithoutSuccessorInputSchema } from './SkillLinkCreateOrConnectWithoutSuccessorInputSchema';
import { SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema } from './SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema';
import { SkillLinkCreateManySuccessorInputEnvelopeSchema } from './SkillLinkCreateManySuccessorInputEnvelopeSchema';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';
import { SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema } from './SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema';
import { SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema } from './SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema';
import { SkillLinkScalarWhereInputSchema } from './SkillLinkScalarWhereInputSchema';

export const SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema: z.ZodType<Prisma.SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => SkillLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUpsertWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUpdateWithWhereUniqueWithoutSuccessorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUpdateManyWithWhereWithoutSuccessorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillLinkScalarWhereInputSchema),z.lazy(() => SkillLinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SkillLinkUncheckedUpdateManyWithoutSuccessorNestedInputSchema;
