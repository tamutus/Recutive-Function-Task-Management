import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutSkillsInputSchema } from './PersonCreateWithoutSkillsInputSchema';
import { PersonUncheckedCreateWithoutSkillsInputSchema } from './PersonUncheckedCreateWithoutSkillsInputSchema';

export const PersonCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutSkillsInputSchema;
