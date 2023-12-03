import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutPrivateEnergiesInputSchema } from './SkillUpdateWithoutPrivateEnergiesInputSchema';
import { SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const SkillUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
