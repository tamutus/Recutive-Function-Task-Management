import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathCreateWithoutPrioritiesInputSchema } from './SkillPathCreateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedCreateWithoutPrioritiesInputSchema } from './SkillPathUncheckedCreateWithoutPrioritiesInputSchema';

export const SkillPathCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => SkillPathWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default SkillPathCreateOrConnectWithoutPrioritiesInputSchema;
