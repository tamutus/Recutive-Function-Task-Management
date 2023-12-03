import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutPrioritiesInputSchema } from './SkillPathCreateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedCreateWithoutPrioritiesInputSchema } from './SkillPathUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillPathCreateOrConnectWithoutPrioritiesInputSchema } from './SkillPathCreateOrConnectWithoutPrioritiesInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';

export const SkillPathCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional()
}).strict();

export default SkillPathCreateNestedOneWithoutPrioritiesInputSchema;
