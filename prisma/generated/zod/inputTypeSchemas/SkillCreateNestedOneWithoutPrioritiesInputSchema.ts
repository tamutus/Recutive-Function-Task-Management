import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrioritiesInputSchema } from './SkillCreateWithoutPrioritiesInputSchema';
import { SkillUncheckedCreateWithoutPrioritiesInputSchema } from './SkillUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillCreateOrConnectWithoutPrioritiesInputSchema } from './SkillCreateOrConnectWithoutPrioritiesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutPrioritiesInputSchema;
