import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutSkillsInputSchema } from './SkillPathCreateWithoutSkillsInputSchema';
import { SkillPathUncheckedCreateWithoutSkillsInputSchema } from './SkillPathUncheckedCreateWithoutSkillsInputSchema';
import { SkillPathCreateOrConnectWithoutSkillsInputSchema } from './SkillPathCreateOrConnectWithoutSkillsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';

export const SkillPathCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional()
}).strict();

export default SkillPathCreateNestedOneWithoutSkillsInputSchema;
