import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillsWhereUniqueInputSchema } from './PrioritiesToSkillsWhereUniqueInputSchema';
import { PrioritiesToSkillsUpdateWithoutSkillInputSchema } from './PrioritiesToSkillsUpdateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema';
import { PrioritiesToSkillsCreateWithoutSkillInputSchema } from './PrioritiesToSkillsCreateWithoutSkillInputSchema';
import { PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => PrioritiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrioritiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PrioritiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema;
