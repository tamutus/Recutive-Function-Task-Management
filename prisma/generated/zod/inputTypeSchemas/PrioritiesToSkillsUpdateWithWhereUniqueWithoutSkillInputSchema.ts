import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithoutSkillInputSchema } from './PrioritiesToSkillsUpdateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema';

export const PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema;
