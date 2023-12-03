import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema';
import { SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema } from './SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';

export const SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema).array(),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillsToTaskTemplatesCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillsToTaskTemplatesCreateNestedManyWithoutSkillInputSchema;
