import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrioritiesInputSchema } from './PersonCreateWithoutPrioritiesInputSchema';
import { PersonUncheckedCreateWithoutPrioritiesInputSchema } from './PersonUncheckedCreateWithoutPrioritiesInputSchema';
import { PersonCreateOrConnectWithoutPrioritiesInputSchema } from './PersonCreateOrConnectWithoutPrioritiesInputSchema';
import { PersonUpsertWithoutPrioritiesInputSchema } from './PersonUpsertWithoutPrioritiesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './PersonUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { PersonUpdateWithoutPrioritiesInputSchema } from './PersonUpdateWithoutPrioritiesInputSchema';
import { PersonUncheckedUpdateWithoutPrioritiesInputSchema } from './PersonUncheckedUpdateWithoutPrioritiesInputSchema';

export const PersonUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => PersonUpdateWithoutPrioritiesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
