import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutPrioritiesInputSchema } from './PersonCreateWithoutPrioritiesInputSchema';
import { PersonUncheckedCreateWithoutPrioritiesInputSchema } from './PersonUncheckedCreateWithoutPrioritiesInputSchema';

export const PersonCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutPrioritiesInputSchema;
