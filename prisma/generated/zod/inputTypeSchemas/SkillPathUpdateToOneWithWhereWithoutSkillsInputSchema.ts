import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { SkillPathUpdateWithoutSkillsInputSchema } from './SkillPathUpdateWithoutSkillsInputSchema';
import { SkillPathUncheckedUpdateWithoutSkillsInputSchema } from './SkillPathUncheckedUpdateWithoutSkillsInputSchema';

export const SkillPathUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => SkillPathWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillPathUpdateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default SkillPathUpdateToOneWithWhereWithoutSkillsInputSchema;
